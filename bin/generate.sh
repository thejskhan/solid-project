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

#TPUT BACKGROUND COLORS
textbg=`tput setab 0`
greenbg=`tput setab 2`
yellowbg=`tput setab 3`
magentabg=`tput setab 5`
cyanbg=`tput setab 6`

# TPUT TEXT
bold=`tput bold`
underline=`tput smul`

# TPUT RESET
reset=`tput sgr0`
# ---------------------

PrintTo () {
    echo -e $2 >> $1
}

WarnFilesExist() {
    if [ "$2" != "" ]
    then
        echo -e "${bold}${magenta}FILES ALREADY EXIST${reset} at ${underline}$1${reset} or ${underline}$2${reset}"
    else
        echo -e "${bold}${magenta}FILE ALREADY EXIST${reset} at ${underline}$1${reset}"
    fi
}

WarnProvideName() {
    echo -e "${bold}${magenta}Please provide a name${reset} for ${underline}$1${reset}"
}

AnnounceCreation() {
    typeName=$(echo $1 | tr [:lower:] [:upper:])
    echo -e "${bold}${green}CREATING THE $typeName ${yellow}$2${reset} \n@ ${underline}$3${reset}\n"
}

CreateComponentTo() {
    IFS='-' read -ra names <<< "$2"
    for i in "${names[@]}"; do
        nameConstructor=${nameConstructor}$(echo ${i:0:1} | tr 'a-z' 'A-Z')${i:1}
    done

    touch $1

    extention=$(echo ${3:0:1} | tr 'a-z' 'A-Z')${3:1}

    PrintTo $1 "//Next, React (core node_modules) imports must be placed here"
    PrintTo $1

    PrintTo $1 "//import STORE from '@/store'"
    PrintTo $1

    if [[ "$3" != "component" ]] && [[ "$3" != "composite" ]] && [[ "$3" != "view" ]] && [[ "$3" != "layout" ]]
    then
        PrintTo $1 "//import LAYOUT from '@/layouts'"
        PrintTo $1
    fi
    
    if [[ "$3" != "component" && "$3" != "composite" && "$3" != "view" ]]
    then
        PrintTo $1 "//import VIEWS from '@/views'"
        PrintTo $1
        PrintTo $1 "//import useFETCHER from '@/tools'"
        PrintTo $1
    fi

    if [[ "$3" != "component" && "$3" != "composite" ]]
    then
        PrintTo $1 "//import COMPOSITES from '@/composites'"
        PrintTo $1
    fi
    
    if [ "$3" != "component" ]
    then
        PrintTo $1 "//import COMPONENT from '@/components'"
        PrintTo $1
    fi
    
    PrintTo $1

    
    if [ "$3" = "layout" ]
    then
        PrintTo $1 "const $nameConstructor$extention = ({children, ...props}) => {"
    elif [ "$3" = "page" ]
    then
        PrintTo $1 "const $nameConstructor$extention = (props) => {"
    else
        PrintTo $1 "const $nameConstructor = (props) => {"
    fi

    PrintTo $1 "\t return ("

    if [ "$3" = "page" ]
    then
        PrintTo $1 "\t\t <main className=\"\">"
    else
        PrintTo $1 "\t\t <div className=\"\">"
    fi

    if [ "$3" = "layout" ]
    then
        PrintTo $1 "\t\t\t{children}"
    else
        PrintTo $1 "\t\t\t"
    fi


    if [ "$3" = "page" ]
    then
        PrintTo $1 "\t\t</main>"
    else
        PrintTo $1 "\t\t</div>"
    fi

    PrintTo $1 "\t)"
    PrintTo $1 "};"
    PrintTo $1
    
    if [ "$3" = "layout" ] || [ "$3" = "page" ]
    then
        PrintTo $1 "export default $nameConstructor$extention;"
    else
        PrintTo $1 "export default $nameConstructor;"
    fi
}

CreateStoreTo() {
    PrintTo $1 "import { createContext, useState } from 'react';"
    PrintTo $1
    PrintTo $1 "const $2Context = createContext({"
    PrintTo $1 "\t"
    PrintTo $1 "});"
    PrintTo $1
    PrintTo $1 "export const $2ContextProvider = ({children, ...props}) => {"
    PrintTo $1
    PrintTo $1 "\tconst context = {};"
    PrintTo $1
    PrintTo $1 "\treturn ("
    PrintTo $1 "\t\t<$2Context.Provider value={context}>"
    PrintTo $1 "\t\t\t{children}"
    PrintTo $1 "\t\t</$2Context.Provider>"
    PrintTo $1 "\t);"
    PrintTo $1 "};"
    PrintTo $1
    PrintTo $1 "export default $2Context;"
}

# GENERATE LAYOUT
if [ "$1" = "layout" ]
then
    if [ "$2" = "" ]
    then
        WarnProvideName "layout"
        exit 1
    fi

    componentName=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    componentDirName=layouts/$componentName
    componentJSDirName=$componentDirName/index.jsx

    if [ ! -d $componentDirName ]
    then
        AnnounceCreation $1 DIRECTORY $componentDirName
        mkdir $componentDirName
    fi

    if [[ ! -f $componentJSDirName ]]
    then

        AnnounceCreation $1 COMPONENT $componentJSDirName
        CreateComponentTo $componentJSDirName $componentName layout
    else
        WarnFilesExist $componentJSDirName
    fi

# GENERATE PAGE
elif [ "$1" = "page" ]
then
    if [ "$2" = "" ]
    then
        WarnProvideName "page"
        exit 1
    fi

    componentName=$2
    componentDirName=pages/$componentName
    componentJSDirName=$componentDirName/index.jsx


    if [ ! -d $componentDirName ]
    then
        AnnounceCreation $1 DIRECTORY $componentDirName
        mkdir $componentDirName
    fi

    if [[ ! -f $componentJSDirName ]]
    then
        AnnounceCreation $1 COMPONENT $componentJSDirName
        CreateComponentTo $componentJSDirName $componentName page
    else
        WarnFilesExist $componentJSDirName
    fi

# GENERATE VIEW
elif [[ "$1" = "view" && "$3" != "" ]]
then
    componentParentName=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    componentName=$(echo ${3:0:1} | tr 'a-z' 'A-Z')${3:1}
    componentParentDirName=views/$componentParentName
    componentDirName=$componentParentDirName/$componentName
    componentJSDirName=$componentDirName/index.jsx

    if [ ! -d $componentParentDirName ]
    then
        AnnounceCreation $1 "PARENT DIRECTORY" $componentParentDirName
        mkdir $componentParentDirName
    fi

    if [ ! -d $componentDirName ]
    then
        AnnounceCreation $1 DIRECTORY $componentDirName
        mkdir $componentDirName
    fi

    if [[ ! -f $componentJSDirName ]]
    then
        AnnounceCreation $1 COMPONENT $componentJSDirName
        CreateComponentTo $componentJSDirName $componentName view
    else
        WarnFilesExist $componentJSDirName
    fi

# GENERATE COMPOSITE
elif [ "$1" = "composite" ]
then
    if [ "$2" = "" ]
    then
        WarnProvideName "composite"
        exit 1
    fi

    componentName=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    componentDirName=composites/$componentName
    componentJSDirName=$componentDirName/index.jsx

    if [ ! -d $componentDirName ]
    then
        AnnounceCreation $1 DIRECTORY $componentDirName
        mkdir $componentDirName
    fi

    if [[ ! -f $componentJSDirName ]]
    then
        AnnounceCreation $1 COMPONENT $componentJSDirName
        CreateComponentTo $componentJSDirName $componentName composite
    else
        WarnFilesExist $componentJSDirName
    fi


# GENERATE COMPONENT
elif [ "$1" = "component" ]
then
    if [ "$2" = "" ]
    then
        WarnProvideName "component"
        exit 1
    fi

    componentName=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    componentDirName=components/$componentName
    componentJSDirName=$componentDirName/index.jsx

    if [ ! -d $componentDirName ]
    then
        AnnounceCreation $1 DIRECTORY $componentDirName
        mkdir $componentDirName
    fi

    if [[ ! -f $componentJSDirName ]]
    then
        AnnounceCreation $1 COMPONENT $componentJSDirName
        CreateComponentTo $componentJSDirName $componentName component
    else
        WarnFilesExist $componentJSDirName
    fi

elif [ "$1" = "store" ]
then
    if [ "$2" = "" ]
    then
        WarnProvideName "store"
        exit 1
    fi

    componentName=$(echo ${2:0:1} | tr 'a-z' 'A-Z')${2:1}
    componentJSDirName=store/$componentName.jsx

    if [ ! -f $componentJSDirName ]
    then
        AnnounceCreation $1 $componentName $componentJSDirName
        CreateStoreTo $componentJSDirName $componentName
    else
        WarnFilesExist $componentJSDirName
    fi

# HELP
else
    echo "${cyan}${bold}Solid Project${reset} ${underline}Generate${reset}"
    echo -e "${green}${bold}npm run ${underline}generate${reset} ${bold}store${reset}\t\t ${yellow}StoreName${reset}"
    echo -e "${green}${bold}npm run ${underline}generate${reset} ${bold}layout${reset}\t\t ${yellow}LayoutName${reset}"
    echo -e "${green}${bold}npm run ${underline}generate${reset} ${bold}page${reset}\t\t ${yellow}PageName${reset}"
    echo -e "${green}${bold}npm run ${underline}generate${reset} ${bold}view${reset}\t\t PageName\t ${yellow}ViewName${reset}"
    echo -e "${green}${bold}npm run ${underline}generate${reset} ${bold}composite${reset}\t ${yellow}ComponentName${reset}"
    echo -e "${green}${bold}npm run ${underline}generate${reset} ${bold}component${reset}\t ${yellow}ComponentName${reset}"
fi