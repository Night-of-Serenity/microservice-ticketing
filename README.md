# Automate Deploy All Kuber Config

```bash
skaffold dev
```

# Force Clean UP

```bash
skaffold delete
```

# Diagnose Pod

```bash
kubectl describe pod [POD_NAME]
```

```bash
# solve error on chrome when run ingress ngin in dev
thisisunsafe
```

# google cloud image setting

```bash
image: us.gcr.io/k8lab-394905/auth
```

# google cli set cluster zone

```bash
gcloud container clusters get-credentials cluster-1 --zone=asia-southeast1
```

# Create Secret Object of Kubernetis

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
```

# Get Secrets

```bash
kubectl get secrets
```
