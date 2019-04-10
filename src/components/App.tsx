import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://api-apeast.graphcms.com/v1/cjuau2t5d0vuc01ff416z780q/master"
});

const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;

// client
//   .query({
//     query: testQuery
//   })
//   .then((res: any) => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={POSTS_QUERY}>
          {({ loading, data }: any) => {
            if (loading) return <h1>loading...</h1>;

            const { posts } = data;

            return (
              <React.Fragment>
                {posts.map((post: any, index: number) => (
                  <h1 key={index}>{post.title}</h1>
                ))}
              </React.Fragment>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
