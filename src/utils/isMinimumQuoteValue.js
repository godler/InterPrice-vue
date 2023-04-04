import collect from "collect.js";
import { useStore } from "../composable/useStore";
const { data } = useStore();
export default function isMinimumQuoteValue(
  value,
  display,
  year,
  couponType
) {
  console.log(data);

  return (
    value ==
    collect(data)
      .where("CouponType", couponType)
      .where("Years", year)
      .min(display)
  );
}
