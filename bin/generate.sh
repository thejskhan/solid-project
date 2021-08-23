#!/bin/bash
# SOLID FRAMEWORKS GENERATE by JSkhan (2021)


# GLOBAL VARIABLES
# ---------------------
# TPUT COLORS
text=`tput setaf 0`
green=`tput setaf 2`
yellow=`tput setaf 3`
magenta=`tput setaf 5`
cyan=`tput setaf 6`

# TPUT TEXT
bold=`tput bold`
underline=`tput smul`

# TPUT RESET
reset=`tput sgr0`
# ---------------------


# GENERATE LAYOUT
if [ "$1" = "layout" ]
then
    componentNameConstructor=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    componentName=$componentNameConstructor

    if [ ! -d "layouts/$componentName" ]
    then
        echo -e "${bold}${green}CREATING THE LAYOUT ${yellow}DIRECTORY${reset} \t\tat ${underline}layouts/$componentName${reset}"
        mkdir layouts/$componentName
    fi

    if [[ ! -f "layouts/$componentName/index.jsx" && ! -f "layouts/$componentName/$componentName.module.scss" ]]
    then
        echo -e "${bold}${green}CREATING THE LAYOUT ${yellow}REACT COMPONENT${reset} \tat ${underline}layouts/$componentName/index.js${reset}"
        touch layouts/$componentName/index.jsx

        echo -e "${bold}${green}CREATING THE LAYOUT ${yellow}SCSS FILE${reset} \t\tat ${underline}layouts/$componentName/$componentName.module.scss${reset}"
        touch layouts/$componentName/$componentName.module.scss

        echo "atimport 'global';" >> layouts/$componentName/$componentName.module.scss
        echo "" >> layouts/$componentName/$componentName.module.scss
        echo ".container {" >> layouts/$componentName/$componentName.module.scss
        echo "" >> layouts/$componentName/$componentName.module.scss
        echo "}" >> layouts/$componentName/$componentName.module.scss

        echo "//Next, React (core node_modules) imports must be placed here" >> layouts/$componentName/index.jsx
        echo "" >> layouts/$componentName/index.jsx
        echo "//Styles must be imported here" >> layouts/$componentName/index.jsx
        echo "import styles from './$componentName.module.scss'" >> layouts/$componentName/index.jsx
        echo "" >> layouts/$componentName/index.jsx
        echo "//Components must be imported here" >> layouts/$componentName/index.jsx
        echo "" >> layouts/$componentName/index.jsx
        echo "const ${componentName}Layout = ({children, ...props}) => {" >> layouts/$componentName/index.jsx
        echo -e "\t return (" >> layouts/$componentName/index.jsx
        echo -e "\t\t <div className={styles.container}>" >> layouts/$componentName/index.jsx
        echo -e "\t\t\t{children}" >> layouts/$componentName/index.jsx
        echo -e "\t\t</div>" >> layouts/$componentName/index.jsx
        echo -e "\t)" >> layouts/$componentName/index.jsx
        echo "};" >> layouts/$componentName/index.jsx
        echo "" >> layouts/$componentName/index.jsx
        echo "export default ${componentName}Layout;" >> layouts/$componentName/index.jsx
    else
        echo -e "${bold}${magenta}FILES ALREADY EXIST${reset} at ${underline}layouts/$componentName/index.jsx${reset} or ${underline}layouts/$componentName/$componentName.module.scss${reset}"
    fi

# GENERATE PAGE
elif [ "$1" = "page" ]
then
    componentNameConstructor=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    componentName=$componentNameConstructor

    if [ ! -d "pages/$componentName" ]
    then
        echo -e "${bold}${green}CREATING THE PAGE ${yellow}DIRECTORY${reset} \t\tat ${underline}pages/$componentName${reset}"
        mkdir pages/$componentName
    fi

    if [ ! -f "pages/$componentName/index.jsx" ]
    then
        echo -e "${bold}${green}CREATING THE PAGE ${yellow}REACT COMPONENT${reset} \tat ${underline}pages/$componentName${reset}"
        touch pages/$componentName/index.jsx

        echo "//Next, React (core node_modules) imports must be placed here" >> pages/$componentName/index.jsx
        echo "" >> pages/$componentName/index.jsx
        echo "//Fetchers must be imported here" >> pages/$componentName/index.jsx
        echo "//import useFETCHER from '../PATH/TO/tools/useFETCHER'" >> pages/$componentName/index.jsx
        echo "" >> pages/$componentName/index.jsx
        echo "//Layout must be imported here" >> pages/$componentName/index.jsx
        echo "//import LAYOUT from '../PATH/TO/layouts/LAYOUT'" >> pages/$componentName/index.jsx
        echo "" >> pages/$componentName/index.jsx
        echo "//Component must be imported here" >> pages/$componentName/index.jsx
        echo "//import COMPONENT from '../PATH/TO/components/COMPONENT'" >> pages/$componentName/index.jsx
        echo "" >> pages/$componentName/index.jsx
        echo "const ${componentName}Page = (props) => {" >> pages/$componentName/index.jsx
        echo -e "\treturn (" >> pages/$componentName/index.jsx
        echo -e "\t\t<main>" >> pages/$componentName/index.jsx
        echo -e "\t\t\t" >> pages/$componentName/index.jsx
        echo -e "\t\t</main>" >> pages/$componentName/index.jsx
        echo -e "\t)" >> pages/$componentName/index.jsx
        echo "};" >> pages/$componentName/index.jsx
        echo "" >> pages/$componentName/index.jsx
        echo "export default ${componentName}Page;" >> pages/$componentName/index.jsx
    else
        echo -e "${bold}${magenta}FILE ALREADY EXIST${reset} at ${underline}pages/$componentName${reset}"
    fi

# GENERATE VIEW
elif [[ "$1" = "view" && "$3" != "" ]]
then
    directoryNameConstructor=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    directoryName=$directoryNameConstructor

    componentNameConstructor=$(echo ${3:0:1} | tr 'a-z' 'A-Z')${3:1}
    componentName=$componentNameConstructor

    if [ ! -d "views/$directoryName" ]
    then
        echo -e "${bold}${green}CREATING A${reset} ${bold}PAGE VIEW ${yellow}DIRECTORY${reset} \t\tat ${underline}views/$directoryName${reset}"
        mkdir views/$directoryName
    fi

    if [ ! -d "views/$directoryName/$componentName" ]
    then
        echo -e "${bold}${green}CREATING THE VIEW ${yellow}DIRECTORY${reset} \t\tat ${underline}views/$directoryName/$componentName${reset}"
        mkdir views/$directoryName/$componentName

        echo -e "${bold}${green}CREATING THE VIEW ${yellow}REACT COMPONENT${reset} \tat ${underline}views/$directoryName/$componentName/index.jsx${reset}"
        touch views/$directoryName/$componentName/index.jsx

        echo -e "${bold}${green}CREATING THE VIEW ${yellow}SCSS FILE${reset} \t\tat ${underline}views/$directoryName/$componentName/$componentName.module.scss${reset}"
        touch views/$directoryName/$componentName/$componentName.module.scss

        echo "atimport 'global';" >> views/$directoryName/$componentName/$componentName.module.scss
        echo "" >> views/$directoryName/$componentName/$componentName.module.scss
        echo ".container {" >> views/$directoryName/$componentName/$componentName.module.scss
        echo "" >> views/$directoryName/$componentName/$componentName.module.scss
        echo "}" >> views/$directoryName/$componentName/$componentName.module.scss

        echo "//Next, React (core node_modules) imports must be placed here" >> views/$directoryName/$componentName/index.jsx
        echo "" >> views/$directoryName/$componentName/index.jsx
        echo "//Styles must be imported here" >> views/$directoryName/$componentName/index.jsx
        echo "import styles from './$componentName.module.scss';" >> views/$directoryName/$componentName/index.jsx
        echo "" >> views/$directoryName/$componentName/index.jsx
        echo "// Components must be imported here" >> views/$directoryName/$componentName/index.jsx
        echo "" >> views/$directoryName/$componentName/index.jsx
        echo "const $componentName = (props) => {" >> views/$directoryName/$componentName/index.jsx
        echo -e "\treturn (" >> views/$directoryName/$componentName/index.jsx
        echo -e "\t\t<div className={styles.container}>" >> views/$directoryName/$componentName/index.jsx
        echo -e "\t\t</div>" >> views/$directoryName/$componentName/index.jsx
        echo -e "\t)" >> views/$directoryName/$componentName/index.jsx
        echo "};" >> views/$directoryName/$componentName/index.jsx
        echo "" >> views/$directoryName/$componentName/index.jsx
        echo "export default $componentName;" >> views/$directoryName/$componentName/index.jsx
    else
        echo "${bold}${magenta}THE VIEW DIRECTORY ALREADY EXIST${reset} at ${underline}views/$directoryName/$componentName${reset}"
    fi

# GENERATE COMPONENT
elif [ "$1" = "component" ]
then
    componentNameConstructor=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    componentName=$componentNameConstructor

    if [ ! -d "components/$componentName" ]
    then
        echo -e "${bold}${green}CREATING THE COMPONENT ${yellow}DIRECTORY${reset} \tat ${underline}components/$componentName${reset}"
        mkdir components/$componentName
    fi

    if [[ ! -f "components/$componentName/index.jsx" && ! -f "components/$componentName/$componentName.module.scss" ]]
    then
        echo -e "${bold}${green}CREATING THE ${yellow}REACT COMPONENT${reset} \t\tat ${underline}components/$componentName/index.jsx${reset}"
        touch components/$componentName/index.jsx

        echo -e "${bold}${green}CREATING THE COMPONENT ${yellow}SCSS FILE${reset} \tat ${underline}components/$componentName/$componentName.module.scss${reset}"
        touch components/$componentName/$componentName.module.scss

        echo "atimport 'global';" >> components/$componentName/$componentName.module.scss
        echo "" >> components/$componentName/$componentName.module.scss
        echo ".container {" >> components/$componentName/$componentName.module.scss
        echo "" >> components/$componentName/$componentName.module.scss
        echo "}" >> components/$componentName/$componentName.module.scss

        echo "//Next, React (core node_modules) imports must be placed here" >> components/$componentName/index.jsx
        echo "" >> components/$componentName/index.jsx
        echo "//Styles must be imported here" >> components/$componentName/index.jsx
        echo "import styles from './$componentName.module.scss'" >> components/$componentName/index.jsx
        echo "" >> components/$componentName/index.jsx
        echo "const ${componentName} = (props) => {" >> components/$componentName/index.jsx
        echo -e "\t return (" >> components/$componentName/index.jsx
        echo -e "\t\t <div className={styles.container}>" >> components/$componentName/index.jsx
        echo "" >> components/$componentName/index.jsx
        echo -e "\t\t</div>" >> components/$componentName/index.jsx
        echo -e "\t)" >> components/$componentName/index.jsx
        echo "};" >> components/$componentName/index.jsx
        echo "" >> components/$componentName/index.jsx
        echo "export default ${componentName};" >> components/$componentName/index.jsx
    else
        echo "${bold}${magenta}FILES ALREADY EXIST${reset} at ${underline}components/$componentName/index.jsx${reset} or ${underline}components/$componentName/$componentName.module.scss${reset}"
    fi

# GENERATE API
elif [ "$1" = "api" ]
then
    componentNameConstructor=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    componentName=$componentNameConstructor

    if [ ! -d "pages/api/$componentName" ]
    then
        echo -e "${bold}${green}CREATING THE API ${yellow}DIRECTORY${reset} \tat ${underline}pages/api/$componentName${reset}"
        mkdir pages/api/$componentName
    fi

    if [ ! -f "pages/api/$componentName/index.js" ]
    then
        echo -e "${bold}${green}CREATING THE API ${yellow}HANDLER${reset} \tat ${underline}pages/api/$componentName/index.js${reset}"
        touch pages/api/$componentName/index.js

        echo "//IMPORT UTILITIES HERE" >> pages/api/$componentName/index.js
        echo "" >> pages/api/$componentName/index.js
        echo "//IMPORT MODELS HERE" >> pages/api/$componentName/index.js
        echo "" >> pages/api/$componentName/index.js
        echo "export default async (req, res) => {" >> pages/api/$componentName/index.js
        echo "" >> pages/api/$componentName/index.js
        echo -e "\tif (req.method === 'GET') {" >> pages/api/$componentName/index.js
        echo -e "\t\t//return res.status(200).send()" >> pages/api/$componentName/index.js
        echo -e "\t}" >> pages/api/$componentName/index.js
        echo "" >> pages/api/$componentName/index.js
        echo -e "\tif (req.method === 'POST') {" >> pages/api/$componentName/index.js
        echo -e "\t\t//return res.status(200).send()" >> pages/api/$componentName/index.js
        echo -e "\t}" >> pages/api/$componentName/index.js
        echo "}" >> pages/api/$componentName/index.js

    else
        echo "${bold}${magenta}FILE ALREADY EXIST${reset} at ${underline}pages/api/$componentName/index.js${reset}"
    fi

# GENERATE MODEL
elif [ "$1" = "model" ]
then
    componentNameConstructor=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    componentName=$componentNameConstructor

    if [ ! -f "models/$componentName.js" ]
    then
        echo -e "${bold}${green}CREATING THE MODEL ${yellow}FILE${reset} \tat ${underline}models/$componentName${reset}"
        touch models/$componentName.js

        echo "// import { connectToDatabase } from '../utils/database';" >> models/$componentName.js
        echo "" >> models/$componentName.js
        echo "class $componentName {" >> models/$componentName.js
        echo -e "\tconstructor() {" >> models/$componentName.js
        echo -e "\t}" >> models/$componentName.js
        echo "}" >> models/$componentName.js
        echo "" >> models/$componentName.js
        echo "export default $componentName;" >> models/$componentName.js

    else
        echo "${bold}${magenta}FILE ALREADY EXIST${reset} at ${underline}models/$componentName.js${reset}"
    fi

# GENERATE ENV
elif [ "$1" = "env" ]
then

    if [ ! -f ".env.local" ]
    then
        echo -e "${bold}${green}CREATING LOCAL ${yellow}ENVIRONMENT VARIABLE${reset} \tat ${underline}.env.local${reset}"
        touch .env.local

        echo "MONGODB_URI=" >> .env.local
        echo "MONGODB_DB=" >> .env.local

    else
        echo "${bold}${magenta}ENVIRONMENT VARIABLE ALREADY EXISTS${reset} at ${underline}.env.local${reset}"
    fi


# HELP
else
    echo "${cyan}${bold}SOLID FRAMEWORKS${reset} ${underline}Generate${reset}"
    echo ""
    echo "${bold}Layout${reset}"
    echo "${green}${bold}npm run ${underline}generate${reset} layout ${yellow}LayoutName${reset}"
    echo ""
    echo "${bold}Page${reset}"
    echo "${green}${bold}npm run ${underline}generate${reset} page ${yellow}PageName${reset}"
    echo ""
    echo "${bold}View${reset}"
    echo "${green}${bold}npm run ${underline}generate${reset} view ${yellow}PageName ViewName${reset}"
    echo ""
    echo "${bold}Component${reset}"
    echo "${green}${bold}npm run ${underline}generate${reset} component ${yellow}ComponentName${reset}"
    echo ""
    echo "${bold}API${reset}"
    echo "${green}${bold}npm run ${underline}generate${reset} api ${yellow}APINAME${reset}"
    echo ""
    echo "${bold}Model${reset}"
    echo "${green}${bold}npm run ${underline}generate${reset} model ${yellow}ModelName${reset}"
fi