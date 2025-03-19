interface PageContainerProps {
    children: React.ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {

    // return <div className="flex flex-col items-start py-8 lg:py-16">
    //     {children}
    // </div>
    return <div className="flex flex-col items-center py-8 lg:py-16">
    <div className="w-full max-w-[1280px] flex flex-col items-center relative">
      {children}
    </div>
  </div>

}

export default PageContainer