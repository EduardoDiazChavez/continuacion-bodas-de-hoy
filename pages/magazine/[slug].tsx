import { Markup } from "interweave";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { FC } from "react";
import { Searcher } from "..";
import {
  Banner,
  ShareComponent,
  TagsComponent,
} from "../../components/Article";
import { TagIcon } from "../../components/Icons";
import { RelatedArticles, AsideLastestArticles, SuscribeComponent } from "../../components/Magazine";
import { BreadCumbs, DisqusComponent } from "../../components/Surface";
import { Post } from "../../interfaces";
import { GraphQL } from '../../utils/Fetching';

const Article : FC <Partial<Post>> = (props) => {
  const {content, tags = []} = props
  return (
    <section className="w-full flex flex-col items-center ">
       <div className="max-w-screen-lg mx-auto inset-x-0 px-5 md:px-0">
        <BreadCumbs />
        <Banner {...props} />
        <div className="grid md:grid-cols-3 w-full gap-6 py-8">
          <div className="md:col-span-2 bg-white  rounded-xl p-8 grid grid-cols-6">
            <TagsComponent {...props} />
            <ShareComponent />
            <div className="w-full col-span-6 text-sm pt-8 ">
              <Markup content={content} />
              <div className="flex items-center flex-wrap gap-2 pt-8 ">
                <TagIcon className="text-primary w-6 h-6 " />
                {tags?.map((item, idx) => (
                  <a key={idx} className="text-xs text-gray-400">
                    #{item}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-span-6 pt-8">
              <DisqusComponent {...props} />
            </div>
          </div>

          <aside className="hidden md:flex col-span-1 flex-col gap-8 mt-10">
            <Searcher placeholder="¿Que buscas?" />
            <AsideLastestArticles title={"lo más leido"} />
          </aside>
        </div>
      <RelatedArticles title={"Lee más sobre Pedir Matrimonio"} />
      </div>
      <SuscribeComponent />
    </section>
  );
};

export default Article;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  
  try {
    const {results} = await GraphQL.getPostByCriteria({slug : params.slug})
    return {
      props: results.length > 0 && results[0],
    };
  } catch (error) {
    console.log(error)
    return {
      props: {},
    };
  }
  
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const data = await GraphQL.getSlugPosts()
    return {
      paths: data.map((slug : string) => ({params: {slug}})) ,
      fallback: "blocking",
    };
    
  } catch (error) {
    console.log(error)
    return {
      paths: [],
      fallback: false,
    };
  }
};

