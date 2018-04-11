const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      allFile {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode, getNodes }) => {
  const { createNodeField, createParentChildLink } = boundActionCreators;
  if (node.internal.type === `allImageSharp`) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  }
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const sideImages = new Array();
    //const sideImageSharpNodesId = new Array();

    let images = new Array();
    if (node.frontmatter && node.frontmatter.sideItems) {
      node.frontmatter.sideItems.map((sideItem, index) => {
        // IMPORTANT! Check that 'gatsby-source-filesystem' for images are before pages
        if (sideItem.sideItemImage) {
          const imageAbsolutePath = path.join(__dirname, 'static', sideItem.sideItemImage)
          .split(path.sep)
          .join('/');
          const fileNode = getNodes().find(n => n.absolutePath === imageAbsolutePath);
          if (fileNode != null) {
            // Find ImageSharp node corresponding to the File node
            const imageSharpNodeId = fileNode.children.find((n) => n.endsWith('>> ImageSharp'));
            const imageSharpNode = getNodes().find(n => {if (n.id === imageSharpNodeId) { console.log(n);return n;}}); 
            console.log(fileNode.children);
            images.push(fileNode.children.find((n, index) => n.endsWith('>> ImageSharp')));
          
            sideImages.push({relativePath: sideItem.sideItemImage, absolutePath: imageAbsolutePath, imageNode: imageSharpNode, id: fileNode.children.find((n, index) => {

              return n.endsWith('>> ImageSharp')
            })});
            

            //sideImageSharpNodesId.push(imageSharpNodeId);
            //createParentChildLink({ parent: node, child: getNodes().find(n => n.id === nid) });
   
            //createParentChildLink([{ parent: node, child: images}, ]);

          }
        }
      })
    }
    /*
    if (sideImageSharpNodesId.length) {

      childrenNodes = sideImageSharpNodesId.map((nid, index) => {
        console.log('index', index, nid );
        console.log('childLink', index, getNodes().find(nhej => nhej.id === nid));
        return getNodes().find(nsvejs => nsvejs.id === nid);
        createParentChildLink({ parent: node, child: getNodes().find(n => n.id === nid) })
      })
    }
    //childrenNodes && createParentChildLink({ parent: node, child: childrenNodes });
    const sideImageNodes = sideImageSharpNodesId.map((nodeid, index) => {
      return getNodes().find(tempnode => tempnode.id === nodeid);
    });
*/

    if (sideImages.length ) {
      createNodeField({
        name: `sideImages___NODE`,
        node,
        value: sideImages,
      });
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}



