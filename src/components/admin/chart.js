import { ItemUseContext } from "../../content/item-contex";
export default function Chart() {
  const { history } = ItemUseContext();

  const bar = history.map((e) => {
    return <div>{JSON.stringify(e)} </div>;
  });

  return <div>{bar}</div>;
}
