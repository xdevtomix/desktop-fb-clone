import styled from "styled-components";

export default function Stories() {
    return (
        <Container>
            <Story bUrl="https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <i className='bx bx-plus-circle'></i>
                <div>Add story</div>
            </Story>
            <Story bUrl="https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <img src="https://images.pexels.com/photos/3493730/pexels-photo-3493730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="fred" />
                <div>Fred</div>
            </Story>
            <Story bUrl="https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <img src="https://images.pexels.com/photos/41315/africa-african-animal-cat-41315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="joe" />
                <div>Joe</div>
            </Story>
            <Story bUrl="https://images.pexels.com/photos/41315/africa-african-animal-cat-41315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <img src="https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="allison" />
                <div>Allison</div>
            </Story>
            <Story bUrl="https://images.pexels.com/photos/3493730/pexels-photo-3493730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <img src="https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="gonnoe" />
                <div>Gonnoe</div>
            </Story>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
`;

const Story = styled.div`
    width: 18%;
    aspect-ratio: 9 / 16;
    background-image: linear-gradient(transparent, rgba(0,0,0,0.3)), url("${({ bUrl }) => bUrl}");
    background-position: center;
    background-size: cover;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: white;
    position: relative;
    cursor: pointer;

    i {
        font-size: 1.5rem;
        font-weight: 100;
        margin-bottom: 0.25rem;
    }

    img {
        width: 1.5rem;
        height: 1.5rem;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid #1876f2;
        position: absolute;
        top: 0.75rem;
        left: 0.5rem;
    }

    div {
        font-size: 0.6rem;
        margin-bottom: 0.5rem;
    }
`;