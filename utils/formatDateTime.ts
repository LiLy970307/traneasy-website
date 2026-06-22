export default (timestamp: number) => {
        const date = new Date(timestamp);
        const now = new Date();

        const formatTime = (d: Date) => {
                const h = String(d.getHours()).padStart(2, "0");
                const m = String(d.getMinutes()).padStart(2, "0");
                const s = String(d.getSeconds()).padStart(2, "0");

                return `${h}:${m}:${s}`;
        };

        const today = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
        );

        const targetDay = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
        );

        const diffDays = Math.floor(
                (today.getTime() - targetDay.getTime()) /
                (1000 * 60 * 60 * 24),
        );

        if (diffDays === 0) {
                return `Today ${formatTime(date)}`;
        }

        if (diffDays === 1) {
                return `Yesterday ${formatTime(date)}`;
        }

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day} ${formatTime(date)}`;
};