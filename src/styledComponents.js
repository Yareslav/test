import styled from 'styled-components'
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width};
`
export const Box = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  cursor: pointer;
	& >*{
		height: 50%;
	}
`
export const List = styled.div`
  background-color: gray;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  margin-top: 10px;
`
export const Header = styled.header`
  width: 100%;
  height: 50px;
  background: gray;
  display: flex;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
`
export const Container = styled.div`
  width: 80%;
  margin: 20px auto 0 auto;
  min-width: 320px;
  background: yellow;
`;
export const Input=styled.input`
		width: 80%;
		border-radius: 10px;
		background: blue;
		border: none;
		height: 30px;
`;