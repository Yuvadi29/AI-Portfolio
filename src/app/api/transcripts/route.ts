import { NextResponse } from 'next/server';
import axios from 'axios';
import { YoutubeTranscript } from 'youtube-transcript';


const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLI7xwGSSw_fIRv8Q4nz77IqgqhRxTBbBW&key=AIzaSyBegmeFS1N61KhkWrkG_UwzmcJePtwuXuQ';

const fetchTranscript = async (videoId: string) => {
    try {
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);
        return transcript.map((line: any) => ({
            text: line.text,
            start: line.start,
            end: line.duration ? line.start + line.duration : line.start + 5, // Estimate duration if not provided
        }));
    } catch (error) {
        console.error(`Error fetching transcript for video ${videoId}:`, error);
        return []; // Return an empty array if transcript fetching fails
    }
};

const searchTranscript = (transcripts: any[], query: string) => {
    // Search transcripts for the query
    return transcripts.filter((t) => t.text.toLowerCase().includes(query.toLowerCase()));
};

export async function POST(req: Request) {
    const { query } = await req.json();

    try {
        // Fetch the latest podcasts
        const { data } = await axios.get(YOUTUBE_API_URL);
        const items = data.items.slice(0, 5); // Get the latest 5 podcasts

        // Process transcripts for all podcasts
        let allTranscripts: any[] = [];
        for (const item of items) {
            const videoId = item.snippet.resourceId.videoId;
            const transcripts = await fetchTranscript(videoId);
            allTranscripts = [...allTranscripts, ...transcripts];
        }

        // Search for the query
        const results = searchTranscript(allTranscripts, query);

        console.log(results);

        // Format the response with timestamps
        return NextResponse.json({
            response: results.map((r) => `${r.text} (Start: ${r.start}s, End: ${r.end}s)`),
        });
    } catch (error) {
        console.error('Error processing transcripts:', error);
        return NextResponse.json({ response: 'Failed to process transcripts.' }, { status: 500 });
    }
}
