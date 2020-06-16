import emojiList from "./emojiList.json";

function filterEmoji(searchText) {
  return emojiList
    .filter((emoji) => {
      if (
        emoji.title.toLowerCase().includes(searchText.toLowerCase()) ||
        emoji.keywords.includes(searchText)
      ) {
        return true;
      }
      return false;
    })
    .slice(0, 20);
}

export default filterEmoji;
