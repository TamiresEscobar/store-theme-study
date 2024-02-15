import React, { useContext } from "react";
import { ProductContext } from "vtex.product-context";
import { FormattedCurrency } from "vtex.format-currency";
import styles from '../../styles/components/BadgePrice/styles.css'

const BadgePrice = ({ itemsCustom }) => {
  const listPriceCustom =
    itemsCustom?.items[0]?.sellers[0]?.commertialOffer?.ListPrice;
  const priceCustom = itemsCustom?.items[0]?.sellers[0]?.commertialOffer?.Price;

  const calc = listPriceCustom - priceCustom;
  const bdgeProductNative = useContext(ProductContext);

  const listPriceNative =
    bdgeProductNative?.product?.items[0]?.sellers[0]?.commertialOffer
      ?.ListPrice;
  const priceNative =
    bdgeProductNative?.product?.items[0]?.sellers[0]?.commertialOffer?.Price;
  const calcNativ = listPriceNative - priceNative;

  return (
    <div>
      {itemsCustom ? (
        <div className={styles.contentBadgePrice}>
          Economize <FormattedCurrency value={calc} />
        </div>
      ) : (
        <div className={styles.contentBadgePrice}>
          Economize <FormattedCurrency value={calcNativ} />
        </div>
      )}
    </div>
  );
};

export default BadgePrice;
