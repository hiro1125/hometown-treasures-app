/** サーバーから時間のAPIを常に取得 */
const URL = 'https://worldtimeapi.org/api/timezone/Asia/Tokyo';

export const fetchServerTime = async () => {
  try {
    const response = await fetch(URL);

    /** 時間などの情報をJSON形式で取得 */
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
