export interface CrispLastMessage {
        content: string;
        timestamp: number;
        nickname?: string;
}

export const useCrispLastMessage = () =>
        useState<CrispLastMessage | null>(
                "crisp-last-message",
                () => null,
        );