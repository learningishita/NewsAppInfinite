import { useEffect, useRef, useState } from "react";

function useInfiniteScroll() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const page = useRef(1);

  const getFeedData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      let response = await fetch(
        `http://localhost:3001/api/photo-gallery-feed?page=${page.current}`
      );
      let data = await response.json();
      console.log("data", getFeedData);
      page.current = page.current+1;
      console.log("pagenumber", page);
      setItems((prevItems) => [...prevItems, ...data.nodes]);
      
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getFeedData();
  }, []);

  const handleScroll = (e) => {
    // console.log(
    //   " window.innerHeight+document.documentElement.scrollTop",
    //   window.innerHeight + document.documentElement.scrollTop
    // );
    // console.log(
    //   "document.documentElement.scrollHeight",
    //   document.documentElement.scrollHeight
    // );
    // console.log(
    //   "difference",
    //   window.innerHeight +
    //     document.documentElement.scrollTop -
    //     document.documentElement.scrollHeight
    // );
    e.preventDefault();
    if (
      window.innerHeight +
        document.documentElement.scrollTop -
        document.documentElement.scrollHeight <=
        10 &&
      window.innerHeight +
        document.documentElement.scrollTop -
        document.documentElement.scrollHeight >=
        0
    ) {
      console.log("inside page last", page);
      getFeedData();
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    items,
    isLoading,
    error,
    page,
  };
}

export default useInfiniteScroll;
