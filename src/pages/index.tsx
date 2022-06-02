import Layout from "../components/Layout"

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-tor-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <span>Conteúdo</span>
      </Layout>
     <span className="text-4xl">App</span>
    </div>
  )
}
