export default {
  iconClassName: "fa fa-th",
  type: "basic",
  name: "newLayout",
  schema: {
    component: "RootWidget",
    schemaChildren: [
      {
        component: "A10Form",
        name: "SlbVirtualServerForm",
        schema: "slb-virtual-server",
        horizontal: true,
        schemaChildren: [
          {
            component: "A10Field",
            name: "virtual-server.name",
            label: "Name",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.name.A10FormControl"
              }
            ]
          },
          {
            component: "A10Field",
            name: "virtual-server.ipv6-address",
            label: "Ipv 6 Address",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.ipv6-address.A10FormControl"
              }
            ],
            conditional: "virtual-server.name"
          },
          {
            component: "A10Field",
            name: "virtual-server.ip-address",
            label: "Ip Address",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.ip-address.A10FormControl"
              }
            ],
            conditional: "virtual-server.name"
          },
          {
            component: "A10Field",
            name: "virtual-server.netmask",
            label: "Netmask",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.netmask.A10FormControl"
              }
            ],
            conditional: "virtual-server.ip-address"
          },
          {
            component: "A10Field",
            name: "virtual-server.ipv6-acl",
            label: "Ipv 6 Acl",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.ipv6-acl.A10FormControl"
              }
            ],
            conditional: "virtual-server.ipv6-address"
          },
          {
            component: "A10Field",
            name: "virtual-server.acl",
            label: "Acl",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.acl.A10FormControl"
              }
            ],
            conditional: "virtual-server.ip-address"
          },
          {
            component: "A10Field",
            name: "virtual-server.acl-id",
            label: "Acl Id",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.acl-id.A10FormControl"
              }
            ],
            conditional: "virtual-server.acl"
          },
          {
            component: "A10Field",
            name: "virtual-server.acl-name",
            label: "Acl Name",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.acl-name.A10FormControl"
              }
            ],
            conditional: "virtual-server.acl"
          },
          {
            component: "A10Field",
            name: "virtual-server.use-if-ip",
            label: "Use If Ip",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.use-if-ip.A10FormControl"
              }
            ],
            conditional: "virtual-server.name"
          },
          {
            component: "A10Field",
            name: "virtual-server.ethernet",
            label: "Ethernet",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.ethernet.A10FormControl"
              }
            ],
            conditional: "virtual-server.use-if-ip"
          },
          {
            component: "A10Field",
            name: "virtual-server.description",
            label: "Description",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.description.A10FormControl"
              }
            ]
          },
          {
            component: "A10Field",
            name: "virtual-server.enable-disable-action",
            label: "Enable Disable Action",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.enable-disable-action.A10FormControl"
              }
            ]
          },
          {
            component: "A10Field",
            name: "virtual-server.redistribution-flagged",
            label: "Redistribution Flagged",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.redistribution-flagged.A10FormControl"
              }
            ]
          },
          {
            component: "A10Field",
            name: "virtual-server.arp-disable",
            label: "Arp Disable",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.arp-disable.A10FormControl"
              }
            ]
          },
          {
            component: "A10Field",
            name: "virtual-server.template",
            label: "Template",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.template.A10FormControl"
              }
            ]
          },
          {
            component: "A10Field",
            name: "virtual-server.template-policy",
            label: "Template Policy",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.template-policy.A10FormControl"
              }
            ],
            conditional: "virtual-server.template"
          },
          {
            component: "A10Field",
            name: "virtual-server.template-virtual-server",
            label: "Template Virtual Server",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.template-virtual-server.A10FormControl"
              }
            ],
            conditional: "virtual-server.template"
          },
          {
            component: "A10Field",
            name: "virtual-server.template-logging",
            label: "Template Logging",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.template-logging.A10FormControl"
              }
            ],
            conditional: "virtual-server.template"
          },
          {
            component: "A10Field",
            name: "virtual-server.template-scaleout",
            label: "Template Scaleout",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.template-scaleout.A10FormControl"
              }
            ],
            conditional: "virtual-server.template"
          },
          {
            component: "A10Field",
            name: "virtual-server.stats-data-action",
            label: "Stats Data Action",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.stats-data-action.A10FormControl"
              }
            ]
          },
          {
            component: "A10Field",
            name: "virtual-server.extended-stats",
            label: "Extended Stats",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.extended-stats.A10FormControl"
              }
            ]
          },
          {
            component: "A10Field",
            name: "virtual-server.vrid",
            label: "Vrid",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.vrid.A10FormControl"
              }
            ]
          },
          {
            component: "A10Field",
            name: "virtual-server.port-list",
            label: "Port List",
            schemaChildren: [
              {
                component: "A10FormControl",
                name: "virtual-server.port-list.A10FormControl"
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
}
