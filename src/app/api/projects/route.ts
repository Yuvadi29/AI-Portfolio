import { Octokit } from "@octokit/rest";
import { HfInference } from "@huggingface/inference";


const octokit = new Octokit({
    auth: GITHUB_API_TOKEN,
});

let projectsCache: any[] = [];

// Fetch all repositories for the authenticated user
export async function GET() {
    try {
        const allRepositories = [];
        let page = 1;

        while (true) {
            const response = await octokit.repos.listForAuthenticatedUser({
                per_page: 100,
                page,
            });

            if (response.data.length === 0) break;

            allRepositories.push(...response.data);
            page++;
        }

        // Fetch additional context for repositories
        const detailedRepos = await Promise.all(
            allRepositories.map(async (repo) => {
                try {
                    // Try fetching README.md
                    const readmeResponse = await octokit.repos.getContent({
                        owner: repo.owner.login,
                        repo: repo.name,
                        path: 'README.md',
                    });
                    

                    const readmeContent = Buffer.from(
                        (readmeResponse.data as any).content,
                        'base64'
                    ).toString('utf-8');

                    return {
                        name: repo.name,
                        description: repo.description || '',
                        content: readmeContent,
                        html_url: repo.html_url,
                    };
                } catch {
                    // Fallback to description only
                    return {
                        name: repo.name,
                        description: repo.description || '',
                        content: '',
                        html_url: repo.html_url,
                    };
                }
            })
        );

        projectsCache = detailedRepos; // Cache for POST handler

        return new Response(JSON.stringify(detailedRepos), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error fetching repositories:", error);
        return new Response(
            JSON.stringify({ error: "Failed to fetch repositories", details: error }),
            { status: 500 }
        );
    }
}

// Search for repositories using Hugging Face sentence similarity
export async function POST(req: Request) {
    try {
        const { query } = await req.json();

        if (!query) {
            return new Response(
                JSON.stringify({ error: "Query string is required." }),
                { status: 400 }
            );
        }

        // Filter the repositories based on name similarity to the query
        const names = projectsCache.map((proj) => proj.name);

        // Sentence similarity input
        const searchResponse = await hf.sentenceSimilarity({
            model: 'sentence-transformers/all-MiniLM-L6-v2',
            inputs: {
                source_sentence: query,
                sentences: names,
            },
        });

        // Filter repositories with a similarity score above a threshold (e.g., 0.5)
        const relevantRepos = searchResponse
            .map((score, index) => ({
                ...projectsCache[index],
                similarity: score,
            }))
            .filter((repo) => repo.similarity > 0.5); // Adjust the threshold as needed

        // Sort the relevant repositories by similarity
        relevantRepos.sort((a, b) => b.similarity - a.similarity);

        return new Response(JSON.stringify(relevantRepos), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error in POST handler:", error);
        return new Response(
            JSON.stringify({ error: "Internal server error", details: error }),
            { status: 500 }
        );
    }
}
