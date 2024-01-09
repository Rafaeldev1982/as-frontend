type Props = { params: { id: string; } }
const Page = ({ params }: Props) => {
    return (
        <div>
            <h3>ID DO EVENTO: {params.id}</h3>
        </div>
    );
}
export default Page;