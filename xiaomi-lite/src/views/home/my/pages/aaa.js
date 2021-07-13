/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-03 18:38:30
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-03 18:38:30
 */

<div className="product_list">
{
  productlist.sections && productlist.sections.map(item=>(
    <div
      className="product_item"
      key={item.body.items[0].id}
      /*  id={item.body.items[0].id} */
      onClick={handleClick(item.body.items[0])}
    >
      {/* {productlist.sections.length} */}
      <div className="product_img">
        <img src={item.body.items[0].img_url} alt="" />
      </div>
      <div className="product_info">
        <p>{item.body.items[0].product_name}</p>
        <p>
          ￥{item.body.items[0].product_price}
          {
            item.body.items[0].subtitle
            &&
            <TagBorderWrapper
            borderColor="#ff5934"
          >
            {item.body.items[0].subtitle}
          </TagBorderWrapper>
          }
        </p>
      </div>
    </div>
  ))
}
</div>