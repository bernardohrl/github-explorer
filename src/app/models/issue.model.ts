export class Issue {
    id!: number;
    html_url!: string;
    title!: string;
    user!: {
        login: string;
    }
    labels!: {
        name: string;
        color: string;
    }
}