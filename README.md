# ***Server management document***
>Every word begins with <font size=4>**$**</font> needed to be modified by your own target

>Eentences follow <font size=4>**#**</font> are comments ( <font color=Red>***DO NOT COPY***</font> )
## *connect server*
- `ssh-copy-id root@$ip` # run once when 1st time connect
- `ssh root@$ip` # unnecessary type password if done of cmd before
  
## *update code*
- `git clone $RepoURL` # **RUN ONCE**
- `cd $CodeFolder && git pull` # run if just need to update code
  
## *build code*
> #### <font color=Red>Define variables before build</font>
>- `export HOSTNAME="www.moodup.xyz"`
>- `export MONGO_URI="$mongodb_url"` 
- `cd covid19-emotion/frontend && npm run build` # build frontend code and run after
- `cp -r covid19-emotion/www/* /usr/share/nginx/html` # copy packed code to server environment
> backend code is unnecessary to be built
- `cd covid19-emotion/server && screen -d -m npm run start` # keep running at background even when closed terminal
    - `cd covid19-emotion/server && npm run start` # run only for developing and it will determinate when closed the terminal.

## *run nginx server*
- `nginx -s reload` # run only if modified files in /usr/share/nginx/html or /etc/nginx/conf.d
- `service nginx restart` # restart server
- ***DO NOT FORGET TO START BACKEND CODE***
  
## *schedule tasks*
- `certbot renew` # regenerate the ssl certificate (RUN EVERY 12 MONTH)

## *fabfile functions*
>`[sudo] pip install fabric` # may need sudo authority. **RUN ONCE**

> RUN COMMAND IN YOUR OWN COMPUTER

- `fab --list` # list task functions in fabfile.py 
- `fab -H root@$ip $taskname` # run task in your server


