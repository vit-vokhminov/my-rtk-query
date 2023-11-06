import { useGetGoodsQuery } from '../redux';

function Main1() {
    const { data } = useGetGoodsQuery();

    if (data === null) {
        return null;
    }
    
    return (
        <ul>
            {data.map((item: any) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

export default Main1;
