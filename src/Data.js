import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from './features/apiSlice';

const Data = () => {
  const {
    data: allProductsData,
    isError,
    error,
    isLoading,
  } = useGetAllProductsQuery();
  const { data: singleProductsData } = useGetProductQuery('iphone');

  console.log(singleProductsData);
  console.log(allProductsData);

  if (isLoading) {
    return <h1>It is loading mate!</h1>;
  }
  return <div>Data: </div>;
};

export default Data;
