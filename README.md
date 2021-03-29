# MicroAuth
A micro-frontend, or **mife**(like "wife"), bootstrap that authenticates mife users against Firebase and provides access to a configured mife [realm](https://github.com/Micro-cosm/micro-realm).

To encourage rapid iteration/deployment, this project is configured to use [bin-zsh](https://github.com/wejafoo/bin-zsh).

We value your perspective and invite you to participate in discovering new mife techniques and methods, regardless of your skill-level. Because of the shared common purpose,
**we try to quickly respond to your hackathon team... your success is ours!**

----
**Caution:**  This project is heavily-opinionated with bias towards Nodejs(Typescript)/GoLang/Angular(CLI)/Google(GCP)/Kubernetes.

A few goals of the overarching project:

- Use latest lts node implementation
- Use latest of angular cli
- Use `ng new <PROJECT NAME>` to create each new mife
- Use @angular/schematics wherever available to install libraries
- Use @angular/cli best practice and default libraries where conflicts with mife best practices are not present
- Use the latest library version of the most active project that serves the need
- Target **90% code coverage** as constribution acceptance criteria
- Focus exclusively on GCP deployability and infrastructure support.

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.
