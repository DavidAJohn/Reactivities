import React from 'react'
import { Button, Divider, Grid, GridColumn, Header, Item, ItemContent, 
    ItemGroup, ItemImage, Reveal, RevealContent, Segment, Statistic, StatisticGroup } from 'semantic-ui-react'

export const ProfileHeader = () => {
    return (
        <Segment>
            <Grid>
                <GridColumn width={12}>
                    <ItemGroup>
                        <Item>
                            <ItemImage avatar size='small' src={'/assets/user.png'} />
                            <ItemContent verticalAlign='middle'>
                                <Header as='h1' content='Display Name' />
                            </ItemContent>
                        </Item>
                    </ItemGroup>
                </GridColumn>
                <GridColumn width={4}>
                    <StatisticGroup widths={2}>
                        <Statistic label='Followers' value='24' />
                        <Statistic label='Following' value='42' />
                    </StatisticGroup>
                    <Divider />
                    <Reveal animated='move'>
                        <RevealContent visible style={{width: '100%'}}>
                            <Button fluid color='teal' content='Following'></Button>
                        </RevealContent>
                        <RevealContent hidden style={{width: '100%'}}>
                            <Button 
                                fluid 
                                basic
                                color={true ? 'red' : 'green'} 
                                content={true ? 'Unfollow' : 'Follow'}
                            />
                        </RevealContent>
                    </Reveal>
                </GridColumn>
            </Grid>
        </Segment>
    )
}
