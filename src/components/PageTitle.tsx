
interface PageTitleProps {
    name: string;
}

const PageTitle = (props: PageTitleProps) => {
    const { name } = props;
    return (
        <div className="flex items-center bg-black justify-center px-6 py-12">
            <h1 className="text-white text-[28px] font-bold text-center">{name}</h1>
        </div>
    )
}

export default PageTitle
