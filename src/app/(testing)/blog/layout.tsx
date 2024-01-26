
const BlogLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <section>
            <h1>This is Layout</h1>
            {children}
        </section>
    )
}
export default BlogLayout;