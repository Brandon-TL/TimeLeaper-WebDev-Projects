import { DuoTabButton } from "./DuoTabButton"

const tabs =[
    {
        tabId : 'TB001',
        tabName : 'Dictionary',
        isSelected : true
    },
    {
        tabId : 'TB002',
        tabName : 'Pronouns',
        isSelected : false
    },
    {
        tabId : 'TB003',
        tabName : 'Settings',
        isSelected : false
    }
]

export function DuoTab () {
    // const [isSelected, setIsSelected] = useState(id)

    return (
        <div className="tab-buttons-container">
            {
                tabs.map(({ tabId, tabName, isSelected }) => {
                    return (
                        <DuoTabButton key={tabId} isSelected={isSelected}>
                            {tabName}
                        </DuoTabButton>
                    )
                })
            }
        </div>
    )
}
