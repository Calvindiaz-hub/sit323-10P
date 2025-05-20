# Cloud-Native Node.js App on GCP

## Overview
This project demonstrates deploying a Node.js app with MongoDB on Google Kubernetes Engine and monitoring it using Google Cloud Operations.

## Steps
- Containerized with Docker
- Deployed with Kubernetes on GKE
- Monitored using Cloud Monitoring and Logging

## How to Run
1. Build and push the image to GCP Artifact Registry.
2. Deploy `mongo-deployment.yaml` and `deployment.yaml` using `kubectl apply -f`.

## Monitoring
- Use GCP Console > Operations > Monitoring to view metrics.
- Use Logs Explorer to view logs.

