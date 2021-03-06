
import SchemaAnalysis from './generator/SchemaAnalysis';

const getSchema = (name) => {
  console.log(`get schema of ${name}`);
  return new Promise((resolve, reject) => {
    if (!name) {
      resolve({});
      return;
    }
    System.import(`@a10/a10-schemas/src/${name}.json`).then(module => {
      const sa = new SchemaAnalysis(name, module);
      console.log(module);
      resolve({
        schema: module,
        layout: sa.getMapping(),
        candidates: [
          {
            name: 'button',
            component: 'Button',
            defaultProps: {
              bsStyle: 'primary'
            }
          },
          {
            name: 'ip-address', // for displaying
            component: 'A10Field',
            defaultProps: {
              name: 'ip-address',
              lable: 'ip-address'
            }
          }
        ]
      });
    }).catch(err => {
      console.error('Chunk loading failed');
      reject(err);
    });
  });
};

export default {
  getSchema
};
