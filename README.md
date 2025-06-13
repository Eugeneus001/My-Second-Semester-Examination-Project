* My-Second-semester-Landing-Page
* This is the Second semester Examination Project
* Name: Yusuf Olabamiji
* School ID: ALT/SOE/024/2895
* Course: Cloud Engineering
* Title: The Future of Personalized Nutritional Tracking (MealTracker)
# Steps Involved in achieving the project #
- The landing page was creadted with the use of HTML, CSS and some little touch of JS for a dynamic landing page.
- An EC2 instance was launched on AWS(Amazon Web Services) with ubuntu 22.04
- It was then connected to powershell using the SSH client
- The Public ip address is ( 54.172.137.96)
- The public ip address was used to generate a domain name on freedns.afraid.org ( mealtracker.crabdance.com )
- After the connection, the sudo command was updated and ugraded with the use of 'sudo apt update && sudo apt ugraded -y'
- Nginx was then installed on the powershell ' sudo apt nginx -y'
- The next step was cloning the built landing page that has been pushed to github with 'git clone'
- The landing page that was cloned was then moved to the file "/var/www/html/" with the use of 'sudo mv'  giving the not secured server
* The link to the screenshot of the server [ https://github.com/Eugeneus001/My-Second-Semester-Examination-Project/commit/5899291b86a99cfbe025e98a3c6a305ed11ff9fe] or [screenshot 1.jpg]
- This is the link to the server that has not been configured " http://54.172.137.96/ "
- It was then configured with adding HTTPS with the command' sudo apt install certbot -y'
- Installed the configuration plug in with ' sudo apt install python3-certbot-nginx'
- it was then connected to the nginx therefore, calling the webserver ' sudo certbot --nginx'
- giving the secured server with the domain name
* The link to the secured server with the domain name [ https://github.com/Eugeneus001/My-Second-Semester-Examination-Project/commit/5899291b86a99cfbe025e98a3c6a305ed11ff9fe] or [screenshot 2.jpg]
- This is the website of the encryted server " https://mealtracker.crabdance.com/ "
-Could not do the Bonus Question because I'm having hard time doing the reverse proxy
-THANK YOU.
  
  
