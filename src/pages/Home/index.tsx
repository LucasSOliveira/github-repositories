import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import { Table } from "@/pages/Home/RepositoriesTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepositoriesByName } from "@/services/repository/repository.service";
import { setRepositoriesList, setOpenModal, setLoading } from "@/store/reducers/repository/repository.slice";
import { RepositoryInfo } from "@/pages/Home/RepositoryInfo";
import { Modal } from "@/components/ui/modal";

const HomePage = () => {
  const dispatch = useDispatch();
  const [search, setValue] = useState('');
  const { repositoriesList, repository, openModal, loading } = useSelector((state: any) => state.repository);

  const getRepositoriesByName = async () => {
    if(!loading && search) {
      dispatch(setLoading(true));
      const { repositories, error } = await fetchRepositoriesByName({
        name: search,
      });
  
      if (error) return console.error('error', error);
  
      dispatch(setLoading(false));
      dispatch(setRepositoriesList(repositories));
    }
  };

  const handlerModal = (value: any) => {
    !loading && dispatch(setOpenModal(value))
  }

  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="container flex flex-col gap-8 mb-8">
          <div className="flex flex-wrap lg:grid gap-4 grid-cols-[4fr_1fr]">
            <Input
              value={search}
              disabled={loading}
              onChange={(event: any) => setValue(event.target.value)}
              onKeyDown={(event: any) => {
                event.key === "Enter" && getRepositoriesByName();
              }}
            />
            <Button disabled={loading} className="w-full" onClick={() => getRepositoriesByName()}>
              Buscar
            </Button>
          </div>
          <p>{loading ? '...Buscando informações!' : 'Busque por repositórios do GitHub e veja detalhes sobre eles.'}</p>
        </section>
        <section  className={`container ${loading ? 'opacity-50' : ''}`}>
          <div className="repository-table-height custom-scrollbar overflow-y-auto">
            <Table id="repositories" tData={repositoriesList} />
          </div>
        </section>
        <section>
          <Modal className="" isOpen={openModal} onClose={() => handlerModal(false)}>
            <RepositoryInfo repository={repository} />
          </Modal>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
