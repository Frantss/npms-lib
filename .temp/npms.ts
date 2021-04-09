import { writeFileSync } from "fs";
import axios from "axios";

const packageName = "typescript";

(async () => {
  try {
    const { data: search } = await axios.get(
      `https://api.npms.io/v2/search?q=${packageName}`
    );
    writeFileSync("./search.json", JSON.stringify(search));

    const { data: suggestions } = await axios.get(
      `https://api.npms.io/v2/search/suggestions?q=${packageName}`
    );
    writeFileSync("./suggestions.json", JSON.stringify(suggestions));

    const { data: info } = await axios.get(
      `https://api.npms.io/v2/package/${packageName}`
    );
    writeFileSync("./info.json", JSON.stringify(info));
  } catch (error) {
    console.log(error);
  }
})();
