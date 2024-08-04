export const ITEMS = [

	{
        id: Math.random(),
        name: 'item_armor',
        amount: 1,
        details: [
                {id:'d1',lines: [
                        {id:1,n:'+200 ',stat:'stat_armor'},
                        {id:2,n:'+400 ',stat:'stat_dura'}
                        ],
                },
                {id:'d2',lines:[
                        {id:1,n:'+300 ',stat:'stat_armor'},
                        {id:2,n:'+600 ',stat:'stat_dura'}
                        ]
                },
                {id:'d3',lines: [
                        {id:1,n:'+400 ',stat:'stat_armor'},
                        {id:2,n:'+800 ',stat:'stat_dura'}
                        ],
                },
                {id:'d4',lines:[
                        {id:1,n:'+500 ',stat:'stat_armor'},
                        {id:2,n:'+1000 ',stat:'stat_dura'}
                        ]
                },
                {id:'d5',lines: [
                        {id:1,n:'+600 ',stat:'stat_armor'},
                        {id:2,n:'+1200 ',stat:'stat_dura'}
                        ],
                },
                {id:'d6',lines:[
                        {id:1,n:'+700 ',stat:'stat_armor'},
                        {id:2,n:'+1400 ',stat:'stat_dura'}
                        ]
                },
                {id:'d7',lines: [
                        {id:1,n:'+800 ',stat:'stat_armor'},
                        {id:2,n:'+1600 ',stat:'stat_dura'}
                        ],
                },
                ],
        price: [
                {id:'p1',price:300},
                {id:'p2',price:400},
                {id:'p3',price:500},
                {id:'p4',price:700},
                {id:'p5',price:1000},
                {id:'p6',price:1500},
                {id:'p7',price:2200},
                ]
	},

	{
        id: 'item_armor_bp',
        name: 'item_armor_bp',
        amount: 1,
        details: [
                {id:'d1',detail:'+200 🛡 / +400 ⚡'},
                {id:'d2',detail:'+300 🛡 / +600 ⚡'},
                {id:'d3',detail:'+400 🛡 / +800 ⚡'},
                {id:'d4',detail:'+500 🛡 / +1000 ⚡'},
                {id:'d5',detail:'+575 🛡 / +1150 ⚡'},
                ],
        price: [
                {id:'p1',price:800},
                {id:'p2',price:1500},
                {id:'p3',price:2500},
                {id:'p4',price:3500},
                {id:'p5',price:5000},
                ]
	},
        {
        id: 'item_tool',
        name: 'item_tool',
        amount: 1,
        details: [
                {id:'d1',detail:'+250%'},
                {id:'d2',detail:'+350%'},
                {id:'d3',detail:'+450%'},
                ],
        price: [
                {id:'p1',price:500},
                {id:'p2',price:1000},
                {id:'p3',price:1500},
                ]
        },
        {
        id: 'item_tool_bp',
        name: 'item_tool_bp',
        amount: 1,
        details: [
                {id:'d1',detail:'+200%'},
                {id:'d2',detail:'+300%'},
                {id:'d3',detail:'+375%'},
                ],
        price: [
                {id:'p1',price:1000},
                {id:'p2',price:2000},
                {id:'p3',price:4000},
                ]
        }
                
                

]

/*
{
id: '',
name: '',
amount: ,
details: [
        {id:'d1',detail:''},
        ],
price: [
        {id:'p1',price:},
        ]
}
*/