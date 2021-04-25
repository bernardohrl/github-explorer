export class Issue {
    id!: number;
    title!: string;
    user!: {
        login: string;
    }
    labels!: {
        name: string;
        color: string;
    }
}