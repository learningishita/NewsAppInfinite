import "./infinteScrollItem.css";
import { convertEpochToIST } from "../../utils/utilityFunctions";
function InfiniteScrollItem({ item }) {
  return (
    <>
      <div className="infinte-scoll-item">
        <div className="infinte-scoll-item-img-block">
          <img
            className="infinte-scoll-item-img"
            src={item.field_photo_image_section}
            alt={item.author_name}
          ></img>
        </div>
        <div className="infinte-scoll-item-text-block">
          <div className="infinte-scoll-item-heading-block">
            <p className="infinte-scoll-item-heading">{item.title}</p>
          </div>
          <div className="infinte-scoll-item-date-block">
            <p className="infinte-scoll-item-date">
              {convertEpochToIST(item.last_update)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfiniteScrollItem;
