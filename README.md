# nodejs App
Node js sample app for deployment into Kubernetes using multiple resources. This application will read data from configmap and secrets and map the config map and secret data as an environment variable in pod. All evvironemnt variable will be read by the node app and store into a directory which is mount as a pvc into the application pod. 

Below components will be used into this Sample app refer .github/workflows/appdeploy.yaml for application build and deployment steps.  

* deplyments
* Ingress
* service
* Configmap
* Secret
* VolumeMounts


### Steps to Deploy application on Kubernetes
1. Create nodejs App.
2. Create Dockerfile.
3. Build and push docker image using Docker buildx.
4. Create secret and configmap before creating deployment.
5. Create PV and PVC using external storage.
6. Create Deployment using docker image
7. Create Service with application exposed port
8. Create Ingress for loadbalancer configuring in GCP LB. 

### Create deplyment manually 

`kubectl create -f deployment.yaml -n app`


![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Note") Automatic Deployment:  Github actions workflows (appdeploy) can be used to deploy the application 

### Validate application deployment
After deployment above components will be deployed. 

#### To validate deployment
`kubectl get deployment -n app` 

#### To validate pods
`kubectl get pods -n app`

#### To validate configmap
`kubectl get cm -n app`

#### To validate secrets
`kubectl get secret -n app`

#### To validate persistentvolumes
`kubectl get pv`

#### To validate persistentvolumeclaims
`kubectl get pvc -n app`

#### To validate all components deployed with deployment
`kubectl get all -n app`

#### To validate service
`kubectl get svc -n app`

#### To validate ingress
`kubectl get ing -n app`
