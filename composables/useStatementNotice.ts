export interface StatementNoticeItem {
  id: number;
  name: string;
  title: string;
  subTitle: string;
  content: string;
  enabled: number;
  deleted: number;
  createDateTime: string;
  updateDateTime: string;
}

interface StatementNoticeResponse {
  success: boolean;
  code: number;
  msg: string;
  data: StatementNoticeItem[];
}

export const useStatementNotice = async () => {
  const config = useRuntimeConfig();
  const noticeApi = `${config.public.clientUserApiBase}/notice/list`;

  const { data, pending, error } = await useFetch<StatementNoticeResponse>(
    noticeApi,
    {
      key: "statement-notice-list",
      server: false,
      lazy: true,
    },
  );

  const currentNotice = computed(() => {
    return (data.value?.data ?? []).find(
      (item) => item.enabled === 1 && item.deleted === 0,
    );
  });

  const noticeTitle = computed(() => {
    return currentNotice.value?.title || "易翻译官方严正声明";
  });

  const formattedUpdateDate = computed(() => {
    const dateText =
      currentNotice.value?.updateDateTime ||
      currentNotice.value?.createDateTime;

    if (!dateText) {
      return "-";
    }

    const [date = ""] = dateText.split(" ");
    const [year, month, day] = date.split("-");

    if (!year || !month || !day) {
      return dateText;
    }

    return `${year} 年 ${Number(month)} 月 ${Number(day)} 日`;
  });

  return {
    currentNotice,
    noticeTitle,
    formattedUpdateDate,
    pending,
    error,
  };
};
