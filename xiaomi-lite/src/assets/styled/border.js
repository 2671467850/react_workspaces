import styled from 'styled-components'


const border = Comp => {
  const defaultValue = {
    borderWidth: '1px',
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 0
  }
  
  function genProps(attr, radius) {
    return props => props[attr] || (radius ? defaultValue[attr] * radius : defaultValue[attr])
  }

  return styled(Comp) `
    position: relative;
    border-width: ${ genProps('borderWidth') };
    border-radius: ${ genProps('borderRadius', 1) }px;
    
    &::after {
      // 用以解决边框layer遮盖内容
      pointer-events: none;
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;

      content: "";
      border-color: ${ genProps('borderColor') };
      border-style: ${ genProps('borderStyle') };
      border-width: ${ genProps('borderWidth') };

      @media (max--moz-device-pixel-ratio: 1.49),(-webkit-max-device-pixel-ratio: 1.49),(max-device-pixel-ratio: 1.49),(max-resolution: 143dpi),(max-resolution: 1.49dppx) {
        width: 100%;
        height: 100%;
        transform: scale(1);
        border-radius: ${ genProps('borderRadius', 1) }px;
      }
        

      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49),(-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49),(min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49),(min-resolution: 144dpi) and (max-resolution: 239dpi),(min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
        width: 200%;
        height: 200%;
        transform: scale(.5);
        border-radius: ${ genProps('borderRadius', 2)}px;
      }

      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5),(min-resolution: 240dpi), (min-resolution: 2.5dppx) {
        width: 300%;
        height: 300%;
        transform: scale(.3333333);
        border-radius: ${ genProps('borderRadius', 3)}px;
      }
          
      transform-origin: 0 0;
    }
      
  `
}

export default border