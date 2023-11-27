import InfiniteScrollItem from "./InfiniteScrollItem";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import "./infinteScroll.css";
function InfinteScroll() {
  const { items, isLoading } = useInfiniteScroll();
  return (
    <div className="page">
      {items?.map((element, key) => {
        
        return (
          <>
            <InfiniteScrollItem key={element.node.nid} item={element.node} />
          </>
        );
      })}

    </div>
  );
}
export default InfinteScroll;
