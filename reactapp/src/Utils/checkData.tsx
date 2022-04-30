
const checkData = (e: React.KeyboardEvent<HTMLDivElement>, data: any) => {
    if (!data && e.code === "Space") {
        e.preventDefault();
    }
}
export default checkData;