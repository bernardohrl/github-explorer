export interface Issue {
    id: number;
    html_url: string;
    title: string;
    created_at: string;
    user: {
        login: string;
    }
    labels: [{
        name: string;
        color: string;
    }]
}