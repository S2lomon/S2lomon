#!/bin/sh
#This script uses docker container to generate and serve locally jekyll blog. It uses local volume as a source of a site to "compile"

volume_to_map=$(pwd)
echo $volume_to_map
environment=development
devoptions=

if [[ -n $1 ]]; then
	environment=$1	
fi

if [[ $environment == 'development' ]]; then
    devoptions='--drafts'
fi

docker run -e JEKYLL_ENV=$environment --rm --label=jekyll --volume=$volume_to_map:/srv/jekyll   -it -p 127.0.0.1:4000:4000 jekyll/jekyll jekyll serve $devoptions

