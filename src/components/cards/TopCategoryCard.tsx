import { musicCategories } from "../../data";

const TopCategoryCard = () => {
  return (
    <div className="top-categories-wrap">
      <div className="d-flex g-4 mb-4 flex-wrap align-items-center justify-content-between">
        <h4 className="mb-0">Categories</h4>
        <a href="#" className="btn text-danger p-0">
          See all
        </a>
      </div>

      <div className="categories-container">
        {musicCategories.map((item, index) => (
          <a
            href="#"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
            key={index}
          >
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
export default TopCategoryCard;
