import { DropDownList } from '@progress/kendo-react-dropdowns';

const categories = ["Pizza", "Burger", "Sandwich", "Pasta", "Salad"];

export default function AboutPage(content) {
  return (
    <>
    <div>Choose food category</div>
    <DropDownList style={{ width: "300px" }} 
    data={categories} 
    defaultValue="Pizza"
    />
    </>
  );
}
