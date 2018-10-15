import React, { Component } from 'react';
import css from './css.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { rate }  from '../../actions/picture/rate';

const Container = styled.div`
  ${css.container};
`;

const Title = styled.h1`
  ${css.h1}
`;

const MainCard = styled.div`
  ${css.main_card}
`;
const ContainerCard = styled.div`
  ${css.container_card}
`;

const CardTitle = styled.div`
  ${css.header_card} 
`;

const CardSelect = styled.div`
  ${css.card}
`;

const Card = styled.img`
  ${css.imgcard}
  
`;


class Match extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool
  };
  constructor(){
    super();
    this.state = {
      item1: '',
      item2: '',
    }
  }
  componentDidMount(){
    this.randomCard(this.props.data)
  }
  componentWillReceiveProps(nextProps){
    if(this.props.data.length != nextProps.data.length){
      this.randomCard(nextProps.data)
    }
  }
  randomCard = (data) =>{
    let items = data
    let item1 =  items[Math.floor(Math.random()*items.length)];
    let item2 =  items[Math.floor(Math.random()*items.length)];
    this.setState({item1, item2})
  }
  onClickItem = (item1, item2, winner) => {
    this.props.rate({
      item1: item1,
      item2: item2,
      result: winner,
      data: this.props.data,
    })
    this.randomCard(this.props.data)
  }
  render() { 
    const { item1, item2 } = this.state;
    return (
      <div>
        <Container>
            {!this.props.loading  && 
              <ContainerCard>
                <CardSelect onClick={() => this.onClickItem(item1, item2, item1)}>
                  {item1 && <Card src={item1.url} /> }
                </CardSelect>
                <CardSelect onClick={() => this.onClickItem(item1, item2, item2)}>
                  {item2 && <Card src={item2.url} /> }
                </CardSelect>
              </ContainerCard>
            }
            {this.props.loading && 
              <ContainerCard>
                <Title> Vote en cours </Title>
              </ContainerCard>
            }
          {/* </MainCard> */}
        </Container>
       
      </div>
    );
  }
}


const mapStateTopProps = state => ({
  data: state.picture.load.data,
  loading: state.picture.rate.loading,
});


export default connect(mapStateTopProps, { rate })(Match);


