echo "Criando as imagens................."
docker build -t raulcoast/projeto-backend:1.2 backend/.
docker build -t raulcoast/projeto-database:1.2 database/.


echo "Realizando o push das imagens................."
docker push raulcoast/projeto-backend:1.2
docker push raulcoast/projeto-database:1.2

echo "Criando os deployment e serviços no cluster kubernetes................."
kubectl apply -f .\deployment.yml