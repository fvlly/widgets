import { useState, useEffect } from "react";
import wiki from "../apis/wiki";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("man");
  const [listItems, setListItems] = useState([]);

  function handleChange(e) {
    const { value } = e.target;
    setSearchTerm(value);
  }

  useEffect(() => {
    const search = async (req, res) => {
      try {
        const searchedTerm = await wiki.get("", {
          params: {
            srsearch: searchTerm,
          },
        });
        const {
          data: {
            query: { search: foundItems },
          },
        } = searchedTerm;
        setListItems(foundItems);
      } catch (e) {
        console.log(e.message);
      }
    };

    if (searchTerm && !listItems.length) {
      search();
    }
    const timeoutId = setTimeout(() => {
      if (searchTerm) search();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm,listItems.length]);

  return (
    <>
      <div
        className="container"
        style={{ paddingInline: "2em", fontSize: "1.5em" }}
      >
        <input
          onChange={handleChange}
          type="text"
          placeholder="search videos"
          value={searchTerm}
        />
      </div>
      <div className="list-container">
        {listItems.map((item) => {
          return (
            <div className="container" key={item.pageid}>
              <p>{item.title}</p>
              <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchBar;
