export default {
  iconClassName: 'fa fa-user',
  type: 'basic',
  name: 'login',
  schema: {
    component: 'RootWidget',
    schemaChildren: [
      {
        component: "A10Form",
        name: "AuthForm",
        schema: "auth",
        onSuccess: (res) => { sessionStorage.setItem('token', res.authresponse.signature); },
        horizontal: true,
        schemaChildren: [
          {
            component: "A10Field",
            name: "credentials.username",
            label: "Username",
            schemaChildren: [
              {
                component: 'A10FormControl'
              }
            ]
          },
          {
            component: "A10Field",
            name: "credentials.password",
            label: "Password",
            schemaChildren: [
              {
                component: 'A10FormControl',
                type: 'password'
              }
            ]
          },
          {
            component: "A10SubmitButtons"
          }
        ]
      }
    ]
  }
};
